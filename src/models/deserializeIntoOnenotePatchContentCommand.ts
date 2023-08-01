import {OnenotePatchActionType} from './onenotePatchActionType';
import type {OnenotePatchContentCommand} from './onenotePatchContentCommand';
import {OnenotePatchInsertPosition} from './onenotePatchInsertPosition';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenotePatchContentCommand(onenotePatchContentCommand: OnenotePatchContentCommand | undefined = {} as OnenotePatchContentCommand) : Record<string, (node: ParseNode) => void> {
    return {
        "action": n => { onenotePatchContentCommand.action = n.getEnumValue<OnenotePatchActionType>(OnenotePatchActionType); },
        "content": n => { onenotePatchContentCommand.content = n.getStringValue(); },
        "@odata.type": n => { onenotePatchContentCommand.odataType = n.getStringValue(); },
        "position": n => { onenotePatchContentCommand.position = n.getEnumValue<OnenotePatchInsertPosition>(OnenotePatchInsertPosition); },
        "target": n => { onenotePatchContentCommand.target = n.getStringValue(); },
    }
}
