export default async (itemCount, results) => {
    await expect(await (results).length).toBeGreaterThan(itemCount);
}