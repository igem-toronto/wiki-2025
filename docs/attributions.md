#### Bronze Medal Criterion \#2

Describe what work your team members did and what other people did for your
project using the standardized Project Attributions Form.

Visit the [Medals page](https://competition.igem.org/judging/medals) for more
information.

## What Should this Page Contain?

- The standard navigation menu of your wiki
- The standard footer of your wiki
- The embedded iframe containing your standardized team's Project Attribution
  form.
- Nothing else

## Tips for Success

Teams must use the official Attributions form. This form clearly delineates the
work conducted by your team members and the support received from others.
Carefully review the instructions and requirements of this deliverable on
the [Project Attribution page](https://competition.igem.org/deliverables/project-attribution).
Please note:

- Teams must use the standard form. Do not create your own form.
- The standard Attributions Form must be filled out completely, accurately and
  honestly.
- For the best results, we recommend teams start filling out the Attributions
  Form early in the season and updating it often.

<!-- !!! LEAVE THE IFRAME CODE BELOW AS IT IS, THE ATTRIBUTION FORM OF YOUR TEAM !!! -->
<!-- !!! WILL BE DISPLAYED ON THIS PAGE. DO NOT REMOVE IT, OTHERWISE YOU RISK OF !!! -->
<!-- !!! NOT MEETING BRONZE MEDAL CRITERION #2  -->
<!-- !!! DO NOT CHANGE ITS INDENTATION !!! -->
<div class="row mt-4">
  <script type="text/javascript">
    // Listen to size change and update form height
    window.addEventListener("message", function (e) {
      if (e.origin === "https://teams.igem.org") {
        const {type, data} = JSON.parse(e.data);
        if (type === "igem-attribution-form") {
          const element = document.getElementById("igem-attribution-form");
          element.style.height = `${data + 100}px`;
        }
      }
    });
  </script>
  <iframe style='width: 100%' id="igem-attribution-form"
    src="https://teams.igem.org/wiki/TeamID/attributions">
  </iframe>
</div>
<!-- DO NOT REMOVE THE IFRAME CODE ABOVE -->
