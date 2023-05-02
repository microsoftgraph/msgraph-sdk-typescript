import {AppScope} from './appScope';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppScope(writer: SerializationWriter, appScope: AppScope | undefined = {} as AppScope) : void {
        serializeEntity(writer, appScope)
        writer.writeStringValue("displayName", appScope.displayName);
        writer.writeStringValue("type", appScope.type);
}
