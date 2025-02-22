const { getEvents } = require("./fetch.js")
const { test, expect } = require("@jest/globals")
// getEvents tests

test("getEvents valid username", async () => {
    const input = "LiderB";
    const actual = await getEvents(input);
    const expected = `[{"id":"46314369713","type":"PushEvent","actor":{"id":71089442,"login":"LiderB","display_login":"LiderB","gravatar_id":"","url":"https://api.github.com/users/LiderB","avatar_url":"https://avatars.githubusercontent.com/u/71089442?"},"repo":{"id":925816671,"name":"LiderB/urlshortener","url":"https://api.github.com/repos/LiderB/urlshortener"},"payload":{"repository_id":925816671,"push_id":22520608161,"size":1,"distinct_size":1,"ref":"refs/heads/main","head":"72cd9edba4bd6ea85a890eea45cac751cab65783","before":"711a8bc2998dd3786472f5a2b3f55672d8a06b81","commits":[{"sha":"72cd9edba4bd6ea85a890eea45cac751cab65783","author":{"email":"lider.2001@hotmail.com","name":"LiderB"},"message":"s","distinct":true,"url":"https://api.github.com/repos/LiderB/urlshortener/commits/72cd9edba4bd6ea85a890eea45cac751cab65783"}]},"public":true,"created_at":"2025-02-06T20:44:22Z"},{"id":"45958417269","type":"PublicEvent","actor":{"id":71089442,"login":"LiderB","display_login":"LiderB","gravatar_id":"","url":"https://api.github.com/users/LiderB","avatar_url":"https://avatars.githubusercontent.com/u/71089442?"},"repo":{"id":923110057,"name":"LiderB/gitpodDeneme","url":"https://api.github.com/repos/LiderB/gitpodDeneme"},"payload":{},"public":true,"created_at":"2025-01-27T18:00:28Z"}]`;
    expect(actual).toEqual(expected);
});
