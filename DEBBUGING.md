REACT DEBUGGING WITH REACT DEVELOPER TOOLS

Setup:
- Installed React Developer Tools extension from Microsoft Edge Addons store
- Ran app on localhost:3000
- Opened DevTools (Ctrl+Shift+I) -> Clicked >> -> Opened Components tab

Bugs Found using Components Tab:

1. UserCard Props Missing:
   - Selected first UserCard in Components tree (showed red X error)
   - Props panel showed: name="Ali", age=undefined, email=undefined
   - Root cause: User object in useState missing age and email fields
   - Same for second UserCard

2. Missing Key Prop Warning:
   - Console tab showed: "Each child in a list should have a unique key prop"
   - In Components, UserCard list had no keys

3. Counter Initial Value Type Bug:
   - Selected Counter component
   - Props showed initialValue = "0" (string)
   - This causes count + 1 to do string concatenation "01" instead of 1

Fixes Applied in App.js:
- Changed initialValue="0" to initialValue={0}
- Added complete user data: {id, name, age, email}
- Added key prop: <UserCard key={user.id} {...user} />

Verification:
- After fix, Components tree shows App > Counter > UserCard > UserCard with no red X
- Props now show correct values
- App UI now displays Age and Email correctly
- Counter increments correctly (0,1,2...)