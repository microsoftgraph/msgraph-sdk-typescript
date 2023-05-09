import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {ActivitySettings} from './activitySettings';
import {Configuration} from './configuration';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionState} from './connectionState';
import {createActivitySettingsFromDiscriminatorValue} from './createActivitySettingsFromDiscriminatorValue';
import {createConfigurationFromDiscriminatorValue} from './createConfigurationFromDiscriminatorValue';
import {createConnectionOperationFromDiscriminatorValue} from './createConnectionOperationFromDiscriminatorValue';
import {createExternalGroupFromDiscriminatorValue} from './createExternalGroupFromDiscriminatorValue';
import {createExternalItemFromDiscriminatorValue} from './createExternalItemFromDiscriminatorValue';
import {createSchemaFromDiscriminatorValue} from './createSchemaFromDiscriminatorValue';
import {createSearchSettingsFromDiscriminatorValue} from './createSearchSettingsFromDiscriminatorValue';
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

export function deserializeIntoExternalConnection(externalConnection: ExternalConnection | undefined = {} as ExternalConnection) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(externalConnection),
        "activitySettings": n => { externalConnection.activitySettings = n.getObjectValue<ActivitySettings>(createActivitySettingsFromDiscriminatorValue); },
        "configuration": n => { externalConnection.configuration = n.getObjectValue<Configuration>(createConfigurationFromDiscriminatorValue); },
        "description": n => { externalConnection.description = n.getStringValue(); },
        "groups": n => { externalConnection.groups = n.getCollectionOfObjectValues<ExternalGroup>(createExternalGroupFromDiscriminatorValue); },
        "items": n => { externalConnection.items = n.getCollectionOfObjectValues<ExternalItem>(createExternalItemFromDiscriminatorValue); },
        "name": n => { externalConnection.name = n.getStringValue(); },
        "operations": n => { externalConnection.operations = n.getCollectionOfObjectValues<ConnectionOperation>(createConnectionOperationFromDiscriminatorValue); },
        "schema": n => { externalConnection.schema = n.getObjectValue<Schema>(createSchemaFromDiscriminatorValue); },
        "searchSettings": n => { externalConnection.searchSettings = n.getObjectValue<SearchSettings>(createSearchSettingsFromDiscriminatorValue); },
        "state": n => { externalConnection.state = n.getEnumValue<ConnectionState>(ConnectionState); },
    }
}
