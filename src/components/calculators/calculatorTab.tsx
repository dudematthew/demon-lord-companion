import { ScrollArea } from "~/components/ui/scroll-area";

export default function CalculatorTab({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <ScrollArea className="h-72 w-full">
		// </ScrollArea>
		<div className="max-h-full w-full flex gap-3 px-1 justify-center">
			{children}
		</div>
	);
}
