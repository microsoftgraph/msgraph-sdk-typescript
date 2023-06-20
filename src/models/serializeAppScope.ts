import {AppScope} from './appScope';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppScope(appScope: AppScope | undefined = {} as AppScope, writer: SerializationWriter) : void {
        serializeEntity(writer, appScope)
        writer.writeStringValue("displayName", appScope.displayName);
        writer.writeStringValue("type", appScope.type);
}
