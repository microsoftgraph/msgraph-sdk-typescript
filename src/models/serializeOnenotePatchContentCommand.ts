import {OnenotePatchActionType} from './onenotePatchActionType';
import {OnenotePatchContentCommand} from './onenotePatchContentCommand';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnenotePatchContentCommand(writer: SerializationWriter, onenotePatchContentCommand: OnenotePatchContentCommand | undefined = {} as OnenotePatchContentCommand) : void {
        writer.writeEnumValue<OnenotePatchActionType>("action", onenotePatchContentCommand.action);
        writer.writeStringValue("content", onenotePatchContentCommand.content);
        writer.writeStringValue("@odata.type", onenotePatchContentCommand.odataType);
        writer.writeEnumValue<OnenotePatchInsertPosition>("position", onenotePatchContentCommand.position);
        writer.writeStringValue("target", onenotePatchContentCommand.target);
        writer.writeAdditionalData(onenotePatchContentCommand.additionalData);
}
