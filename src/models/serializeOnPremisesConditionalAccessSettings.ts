import {OnPremisesConditionalAccessSettings} from './onPremisesConditionalAccessSettings';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function serializeOnPremisesConditionalAccessSettings(writer: SerializationWriter, onPremisesConditionalAccessSettings: OnPremisesConditionalAccessSettings | undefined = {} as OnPremisesConditionalAccessSettings) : void {
        serializeEntity(writer, onPremisesConditionalAccessSettings)
        writer.writeBooleanValue("enabled", onPremisesConditionalAccessSettings.enabled);
        writer.writeCollectionOfPrimitiveValues<Guid>("excludedGroups", onPremisesConditionalAccessSettings.excludedGroups);
        writer.writeCollectionOfPrimitiveValues<Guid>("includedGroups", onPremisesConditionalAccessSettings.includedGroups);
        writer.writeBooleanValue("overrideDefaultRule", onPremisesConditionalAccessSettings.overrideDefaultRule);
}
