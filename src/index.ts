import chromium from "chrome-aws-lambda";
import playwright from "playwright-core";

interface LambdaEvent {
	html: string;
	s3Key: string;
}

export const handler = async (event: LambdaEvent) => {
	try {
		const browser = await playwright.chromium.launch({
			args: chromium.args,
			executablePath: await chromium.executablePath,
			headless: chromium.headless,
		});

		const page = await browser.newPage();
		page.setContent(event.html);

		const pdf = await page.pdf({ format: "A4", printBackground: true });

		await browser.close();

		return {
			statusCode: 200,
			headers: { "Content-Type": "application/pdf" },
			body: pdf.toString("base64"),
			isBase64Encoded: true,
		};
	} catch (e: unknown) {
		console.error(e);
		return { statusCode: 500, error: (e as Error).message };
	}
};
