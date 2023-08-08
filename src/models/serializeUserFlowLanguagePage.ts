import {serializeEntity} from './serializeEntity';
import type {UserFlowLanguagePage} from './userFlowLanguagePage';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguagePage(writer: SerializationWriter, userFlowLanguagePage: UserFlowLanguagePage | undefined = {} as UserFlowLanguagePage) : void {
        serializeEntity(writer, userFlowLanguagePage)
}
