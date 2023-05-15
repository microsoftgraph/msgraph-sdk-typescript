import {serializeEntity} from '../serializeEntity';
import {ActivitySettings} from './activitySettings';
import {Configuration} from './configuration';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionState} from './connectionState';
import {ExternalConnection} from './externalConnection';
import {ExternalGroup} from './externalGroup';
import {ExternalItem} from './externalItem';
import {Schema} from './schema';
import {SearchSettings} from './searchSettings';
import {serializeActivitySettings} from './serializeActivitySettings';
import {serializeConfiguration} from './serializeConfiguration';
import {serializeConnectionOperation} from './serializeConnectionOperation';
import {serializeExternalGroup} from './serializeExternalGroup';
import {serializeExternalItem} from './serializeExternalItem';
import {serializeSchema} from './serializeSchema';
import {serializeSearchSettings} from './serializeSearchSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
