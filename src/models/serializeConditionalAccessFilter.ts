import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {FilterMode} from './filterMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessFilter(writer: SerializationWriter, conditionalAccessFilter: ConditionalAccessFilter | undefined = {} as ConditionalAccessFilter) : void {
        writer.writeEnumValue<FilterMode>("mode", conditionalAccessFilter.mode);
        writer.writeStringValue("@odata.type", conditionalAccessFilter.odataType);
        writer.writeStringValue("rule", conditionalAccessFilter.rule);
        writer.writeAdditionalData(conditionalAccessFilter.additionalData);
}
