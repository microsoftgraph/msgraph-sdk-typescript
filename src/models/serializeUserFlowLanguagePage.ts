import {serializeEntity} from './serializeEntity';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguagePage(writer: SerializationWriter, userFlowLanguagePage: UserFlowLanguagePage | undefined = {} as UserFlowLanguagePage) : void {
        serializeEntity(writer, userFlowLanguagePage)
}
