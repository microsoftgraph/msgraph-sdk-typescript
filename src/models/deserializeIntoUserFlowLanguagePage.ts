import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {UserFlowLanguagePage} from './userFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguagePage(userFlowLanguagePage: UserFlowLanguagePage | undefined = {} as UserFlowLanguagePage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userFlowLanguagePage),
    }
}
