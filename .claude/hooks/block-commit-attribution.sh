#!/bin/sh
# Deny git commits whose message carries Co-Authored-By: or Claude-Session: trailers.
cmd=$(jq -r '.tool_input.command // ""')
case "$cmd" in
  *"git commit"*|*"git -c"*"commit"*) ;;
  *) exit 0 ;;
esac
if printf '%s' "$cmd" | grep -qiE 'Co-Authored-By:|Claude-Session:'; then
  jq -n '{hookSpecificOutput: {hookEventName: "PreToolUse", permissionDecision: "deny", permissionDecisionReason: "This repo forbids Co-Authored-By: and Claude-Session: trailers in commit messages. Remove them and commit again."}}'
fi
exit 0
