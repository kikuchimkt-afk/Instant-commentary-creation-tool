---
description: Workflow for integrating and formatting new exam data into mockData.js
---

# Integrate Exam Data Workflow

This workflow outlines the steps to add new exam data (e.g., "2024-1", "2025-2-jun") to `src/data/mockData.js`.

## 1. Preparation

1.  **Analyze Source Data**:
    *   Identify the Exam ID (e.g., `2024-2-jun`), Year, Session, and Venue Type (Main or Sub/Jun).
    *   Extract the "Past Exam" title and "Original Exam" title.
    *   Ensure all data fields are available: `title`, `content`, `questions`, `translations`, `analysis` (intent, summary, comparison, syntax).

2.  **Verify Syntax Analysis Format**:
    *   **CRITICAL**: The `syntax` field must be formatted as **styled HTML**, not Markdown.
    *   Use `<h3 style="color:#2563eb; font-weight:bold;">` for sentence headers.
    *   Use `<blockquote>` for the target sentence.
    *   **MANDATORY**: **Bold the main verb (and relevant distinct verbs) within the `<blockquote>` using `<b>` tags.** (e.g., `it <b>was</b> primarily...`)
    *   Use `<div class="syntax-box syntax-box-structure">` for structural breakdown.
    *   Use `<div class="syntax-box syntax-box-point">` for explanation points.
    *   Ensure **consistent indentation** (4 spaces) within the template literal to avoid rendering issues.

## 2. Implementation

1.  **Update `AVAILABLE_YEARS`**:
    *   Add the new entry to the `AVAILABLE_YEARS` array in `src/data/mockData.js`.
    *   Format: `{ id: "YYYY-S-suffix", year: YYYY, session: S, label: "YYYY年第S回(準会場) (Title)" }`.

2.  **Insert Data Object**:
    *   Add the new data object to `MOCK_DATA` keyed by the Exam ID.
    *   Ensure the `syntax` field string starts immediately after the backtick or is carefully correctly indented to be stripped by `stripCommonIndent`.

## 3. Verification

1.  **Code-Level Inspection (Primary)**:
    *   Use `grep` or `view_file` to check the `syntax` field.
    *   Confirm HTML tags are present (`<h3...`, `<blockquote>`, `<b>`).
    *   **Confirm main verbs in `<blockquote>` are wrapped in `<b>` tags.**
    *   Confirm indentation looks consistent (no mixed tabs/spaces, aligned start).

2.  **Browser Verification**:
    *   Reload the application.
    *   Select the new exam from the dropdown.
    *   Navigate to "Analysis" -> "Syntax".
    *   Confirm the rendering of blue headers, styled boxes, and **bolded verbs**.
    *   Take a screenshot for documentation.

## 4. Documentation

1.  **Update `task.md`**: Mark the integration task as complete.
2.  **Update `walkthrough.md`**: Add a section for the new exam with the verification screenshot.
