# security-pipeline-mineev-ns

Учебный репозиторий для курсовой работы студента **Минеев Н. С.**.

Акцент: **безопасные проверки pull request без pull_request_target и без записи секретов в логи**. Теоретический кейс: **CVE-2025-30154**, компрометация `reviewdog/action-setup@v1` и риск передачи секретов в workflow, запускаемые на pull request.

## Отличие реализации

В этой версии pipeline специально не использует `pull_request_target` и не применяет reviewdog для публикации комментариев от имени workflow. Проверки выполняются с минимальными правами `contents: read`, а результаты сохраняются как artifacts и в summary.

## Проверки

- SAST для JavaScript через CodeQL;
- Semgrep custom rules для поиска небезопасных шаблонов;
- `npm audit` для SCA;
- проверка workflow на отсутствие `pull_request_target`;
- detect-secrets для учебного поиска псевдосекретов.
