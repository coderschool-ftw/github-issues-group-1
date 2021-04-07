# CoderSchool FTW - _GitHub Issues Team 1_

Created with love by: `Jade Ha Tuan Thang`

View online at: [github-issue-team1.netlify.app](github-issue-team1.netlify.app)

<!-- One or two sentence summary of your project, anything fun that you liked. -->

## Video Walkthrough

<!-- Here's a walkthrough of implemented user stories.

To create a GIF, use [LiceCap](http://www.cockos.com/licecap/), [RecordIt](http://www.recordit.co), or [Loom](http://www.useloom.com), and link the image here in the markdown.

```
<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

```-->

## User Stories

The following **required** functionalities are completed:

- [x] The user can enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format `owner/repo-name`, e.g. `facebook/react`.
- [x] If the repository does not exist, the user should see a proper error message.
- [x] The user should be able to see the following information for each issue:
  - Issue Title with Number of the issue
  - Owner of the Issue
  - Owner Avatar
  - How long ago the issue was updated in a human-friendly format (e.g. 2 days ago) (Hint: [react-moment](https://www.npmjs.com/package/react-moment#installing))
  - Body of the Issue
  - Labels of the issue
- [ ] The user should be able to see multiple pages of results, by clicking a pagination control.

The following **optional** features are implemented:

- [ ] The user can see more details (**[including 5 comments of the issue](https://developer.github.com/v3/issues/comments/)**) in a modal that's opened by clicking on the title of the issue.
- [x] The user should be able to see the body of the issue rendered in markdown. (Hint: [react-markdown](https://github.com/rexxars/react-markdown))
- [x] Fetching is an asynchronous operation, so you should display a loading [spinner](https://www.npmjs.com/package/react-spinners) whenever the app loads data, and hide it once the corresponding API call has been completed.
- [x] Input Fuzzy Matching: the user should be able to type in either https://github.com/facebook/react or facebook/react, BOTH should work.
- [ ] In the Issue Detail Modal, let implement an **infinite pagination** with a "Show More" button: Fetch 5 more comments whenever user clicks on the button. The button is disabled or hidden when all the comments have been loaded.
- [ ] Users can create a new issue. (**Danger Warning**: If you attempt this task, please do so on a private repository. Don't spam the official facebook/react repo!)

The following **additional** features are implemented:

- [x] Change label's text color depends on background color.

## Time Spent and Lessons Learned

Time spent: **X** hours spent in total.

<!-- Describe any challenges encountered while building the app. -->

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

```

```
