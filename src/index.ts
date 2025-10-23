import type { Context } from "aws-lambda";

interface LambdaEvent {
	action: string;
	data: string;
}

export const handler = async (event: LambdaEvent, context: Context) => {
	const { functionName } = context;
	const { action, data } = event;

	console.log(
		`Lambda event received for ${functionName}. action=${action}, data=${data}`,
	);
};
