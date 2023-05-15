import {AppScope} from './appScope';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppScope(appScope: AppScope | undefined = {} as AppScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(appScope),
        "displayName": n => { appScope.displayName = n.getStringValue(); },
        "type": n => { appScope.type = n.getStringValue(); },
    }
}
