import type {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import type {WorkbookFunctionResult} from './workbookFunctionResult';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFunctionResult(writer: SerializationWriter, workbookFunctionResult: WorkbookFunctionResult | undefined = {} as WorkbookFunctionResult) : void {
        serializeEntity(writer, workbookFunctionResult)
        writer.writeStringValue("error", workbookFunctionResult.errorEscaped);
        writer.writeObjectValue<Json>("value", workbookFunctionResult.value, serializeJson);
}
