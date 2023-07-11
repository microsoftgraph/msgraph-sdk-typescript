import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {Artifact} from './artifact';
import {createArtifactFromDiscriminatorValue} from './createArtifactFromDiscriminatorValue';
import {Indicator} from './indicator';
import {IndicatorSource} from './indicatorSource';
import {serializeArtifact} from './serializeArtifact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIndicator(indicator: Indicator | undefined = {} as Indicator) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(indicator),
        "artifact": n => { indicator.artifact = n.getObjectValue<Artifact>(createArtifactFromDiscriminatorValue); },
        "source": n => { indicator.source = n.getEnumValue<IndicatorSource>(IndicatorSource); },
    }
}
