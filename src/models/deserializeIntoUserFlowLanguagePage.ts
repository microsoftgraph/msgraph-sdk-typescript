import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type UserFlowLanguagePage } from './userFlowLanguagePage';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguagePage(userFlowLanguagePage: UserFlowLanguagePage | undefined = {} as UserFlowLanguagePage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userFlowLanguagePage),
    }
}
