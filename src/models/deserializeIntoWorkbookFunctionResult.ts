import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Json} from './json';
import {serializeJson} from './serializeJson';
import {WorkbookFunctionResult} from './workbookFunctionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkbookFunctionResult(workbookFunctionResult: WorkbookFunctionResult | undefined = {} as WorkbookFunctionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(workbookFunctionResult),
        "error": n => { workbookFunctionResult.errorEscaped = n.getStringValue(); },
        "value": n => { workbookFunctionResult.value = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
