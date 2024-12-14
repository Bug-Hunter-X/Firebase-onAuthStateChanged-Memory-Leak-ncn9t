# Firebase onAuthStateChanged Memory Leak Example
This repository demonstrates a common error when using Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  The `authBug.js` file shows the problematic code, while `authBugSolution.js` provides the corrected version.

Failing to unsubscribe can lead to memory leaks, as the listener continues to run even when it's no longer needed.  This example highlights the importance of unsubscribing to prevent resource exhaustion and unexpected behavior in your application.
