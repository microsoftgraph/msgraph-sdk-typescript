import {ContainerFilter} from './containerFilter';
import {createContainerFilterFromDiscriminatorValue} from './createContainerFilterFromDiscriminatorValue';
import {createGroupFilterFromDiscriminatorValue} from './createGroupFilterFromDiscriminatorValue';
import {createObjectMappingFromDiscriminatorValue} from './createObjectMappingFromDiscriminatorValue';
import {createStringKeyStringValuePairFromDiscriminatorValue} from './createStringKeyStringValuePairFromDiscriminatorValue';
import {GroupFilter} from './groupFilter';
import {ObjectMapping} from './objectMapping';
import {serializeContainerFilter} from './serializeContainerFilter';
import {serializeGroupFilter} from './serializeGroupFilter';
import {serializeObjectMapping} from './serializeObjectMapping';
import {serializeStringKeyStringValuePair} from './serializeStringKeyStringValuePair';
import {StringKeyStringValuePair} from './stringKeyStringValuePair';
import {SynchronizationRule} from './synchronizationRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSynchronizationRule(synchronizationRule: SynchronizationRule | undefined = {} as SynchronizationRule) : Record<string, (node: ParseNode) => void> {
    return {
        "containerFilter": n => { synchronizationRule.containerFilter = n.getObjectValue<ContainerFilter>(createContainerFilterFromDiscriminatorValue); },
        "editable": n => { synchronizationRule.editable = n.getBooleanValue(); },
        "groupFilter": n => { synchronizationRule.groupFilter = n.getObjectValue<GroupFilter>(createGroupFilterFromDiscriminatorValue); },
        "id": n => { synchronizationRule.id = n.getStringValue(); },
        "metadata": n => { synchronizationRule.metadata = n.getCollectionOfObjectValues<StringKeyStringValuePair>(createStringKeyStringValuePairFromDiscriminatorValue); },
        "name": n => { synchronizationRule.name = n.getStringValue(); },
        "objectMappings": n => { synchronizationRule.objectMappings = n.getCollectionOfObjectValues<ObjectMapping>(createObjectMappingFromDiscriminatorValue); },
        "@odata.type": n => { synchronizationRule.odataType = n.getStringValue(); },
        "priority": n => { synchronizationRule.priority = n.getNumberValue(); },
        "sourceDirectoryName": n => { synchronizationRule.sourceDirectoryName = n.getStringValue(); },
        "targetDirectoryName": n => { synchronizationRule.targetDirectoryName = n.getStringValue(); },
    }
}
