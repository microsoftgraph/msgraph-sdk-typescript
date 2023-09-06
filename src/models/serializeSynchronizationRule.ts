import { type ContainerFilter } from './containerFilter';
import { type GroupFilter } from './groupFilter';
import { type ObjectMapping } from './objectMapping';
import { serializeContainerFilter } from './serializeContainerFilter';
import { serializeGroupFilter } from './serializeGroupFilter';
import { serializeObjectMapping } from './serializeObjectMapping';
import { serializeStringKeyStringValuePair } from './serializeStringKeyStringValuePair';
import { type StringKeyStringValuePair } from './stringKeyStringValuePair';
import { type SynchronizationRule } from './synchronizationRule';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSynchronizationRule(writer: SerializationWriter, synchronizationRule: SynchronizationRule | undefined = {} as SynchronizationRule) : void {
        writer.writeObjectValue<ContainerFilter>("containerFilter", synchronizationRule.containerFilter, serializeContainerFilter);
        writer.writeBooleanValue("editable", synchronizationRule.editable);
        writer.writeObjectValue<GroupFilter>("groupFilter", synchronizationRule.groupFilter, serializeGroupFilter);
        writer.writeStringValue("id", synchronizationRule.id);
        writer.writeCollectionOfObjectValues<StringKeyStringValuePair>("metadata", synchronizationRule.metadata, serializeStringKeyStringValuePair);
        writer.writeStringValue("name", synchronizationRule.name);
        writer.writeCollectionOfObjectValues<ObjectMapping>("objectMappings", synchronizationRule.objectMappings, serializeObjectMapping);
        writer.writeStringValue("@odata.type", synchronizationRule.odataType);
        writer.writeNumberValue("priority", synchronizationRule.priority);
        writer.writeStringValue("sourceDirectoryName", synchronizationRule.sourceDirectoryName);
        writer.writeStringValue("targetDirectoryName", synchronizationRule.targetDirectoryName);
        writer.writeAdditionalData(synchronizationRule.additionalData);
}
