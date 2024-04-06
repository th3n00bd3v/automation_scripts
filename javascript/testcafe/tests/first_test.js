fixture("First fixture")
    .page('https://devexpress.github.io/testcafe/example')


    test("First Test", async t => {
        await t
        .typeText("developer-name","th3n00bd3v")
        .click("#linux")
        .click("#submit-button")
    })