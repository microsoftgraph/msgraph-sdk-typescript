import { serializeEntity } from '../serializeEntity';
import { type ActivitySettings } from './activitySettings';
import { type Configuration } from './configuration';
import { type ConnectionOperation } from './connectionOperation';
import { ConnectionState } from './connectionState';
import { type ExternalConnection } from './externalConnection';
import { type ExternalGroup } from './externalGroup';
import { type ExternalItem } from './externalItem';
import { type Schema } from './schema';
import { type SearchSettings } from './searchSettings';
import { serializeActivitySettings } from './serializeActivitySettings';
import { serializeConfiguration } from './serializeConfiguration';
import { serializeConnectionOperation } from './serializeConnectionOperation';
import { serializeExternalGroup } from './serializeExternalGroup';
import { serializeExternalItem } from './serializeExternalItem';
import { serializeSchema } from './serializeSchema';
import { serializeSearchSettings } from './serializeSearchSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalConnection(writer: SerializationWriter, externalConnection: ExternalConnection | undefined = {} as ExternalConnection) : void {
        serializeEntity(writer, externalConnection)
        writer.writeObjectValue<ActivitySettings>("activitySettings", externalConnection.activitySettings, serializeActivitySettings);
        writer.writeObjectValue<Configuration>("configuration", externalConnection.configuration, serializeConfiguration);
        writer.writeStringValue("description", externalConnection.description);
        writer.writeCollectionOfObjectValues<ExternalGroup>("groups", externalConnection.groups, serializeExternalGroup);
        writer.writeCollectionOfObjectValues<ExternalItem>("items", externalConnection.items, serializeExternalItem);
        writer.writeStringValue("name", externalConnection.name);
        writer.writeCollectionOfObjectValues<ConnectionOperation>("operations", externalConnection.operations, serializeConnectionOperation);
        writer.writeObjectValue<Schema>("schema", externalConnection.schema, serializeSchema);
        writer.writeObjectValue<SearchSettings>("searchSettings", externalConnection.searchSettings, serializeSearchSettings);
}
