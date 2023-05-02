import {Json} from './json';
import {serializeEntity} from './serializeEntity';
import {serializeJson} from './serializeJson';
import {WorkbookFunctionResult} from './workbookFunctionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkbookFunctionResult(writer: SerializationWriter, workbookFunctionResult: WorkbookFunctionResult | undefined = {} as WorkbookFunctionResult) : void {
        serializeEntity(writer, workbookFunctionResult)
        writer.writeStringValue("error", workbookFunctionResult.errorEscaped);
        writer.writeObjectValue<Json>("value", workbookFunctionResult.value, serializeJson);
}
