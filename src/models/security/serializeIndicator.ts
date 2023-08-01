import {serializeEntity} from '../serializeEntity';
import type {Artifact} from './artifact';
import type {Indicator} from './indicator';
import {IndicatorSource} from './indicatorSource';
import {serializeArtifact} from './serializeArtifact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIndicator(writer: SerializationWriter, indicator: Indicator | undefined = {} as Indicator) : void {
        serializeEntity(writer, indicator)
        writer.writeObjectValue<Artifact>("artifact", indicator.artifact, serializeArtifact);
        writer.writeEnumValue<IndicatorSource>("source", indicator.source);
}
