/* Credo Meta Ads preview — review widget config.
 *
 * Comments persist to a Firebase Realtime Database so the internal team and the
 * client see each other's feedback. To enable shared comments:
 *   Firebase console → create a free project → Realtime Database (test mode)
 *   → Project settings → Your apps (Web) → SDK setup → Config → paste below.
 *
 * Until FIREBASE_CONFIG is filled in, comments are stored in THIS browser only
 * (localStorage) — fine for solo review, but NOT shared. The widget shows a
 * banner reminder when it's running in local-only mode.
 */
window.CREDO_REVIEW_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyCQvyKmdjRlIBcRW8CbC73Ew9o5uFp9jt0",
    authDomain: "credo-712c4.firebaseapp.com",
    databaseURL: "https://credo-712c4-default-rtdb.firebaseio.com",
    projectId: "credo-712c4",
    storageBucket: "credo-712c4.firebasestorage.app",
    messagingSenderId: "494337801532",
    appId: "1:494337801532:web:298e363efe2ed11807f239"
  },
  REVIEW_LABELS: {
    toggleButton: "Comments",
    toggleButtonTitle: "Open comment review mode",
    bannerTitle: "Review · Crēdo Nextdoor Business Page",
    localOnly: "Local-only — add Firebase config for shared comments",
    exit: "Exit review",
    sidebarTitle: "Comments",
    empty: "No comments yet. Hover any ad or line of text and click the + to add one.",
    add: "+ Comment",
    save: "Post comment",
    cancel: "Cancel",
    edit: "Edit",
    del: "Delete",
    apply: "Apply",
    archive: "Archive",
    restore: "Restore",
    tabActive: "Active",
    tabApplied: "Applied",
    tabArchived: "Archived",
    placeholder: "Your feedback…",
    replacementPlaceholder: "Suggested change (optional)…",
    namePrompt: "Your name (so the team knows who left this comment):"
  }
};
