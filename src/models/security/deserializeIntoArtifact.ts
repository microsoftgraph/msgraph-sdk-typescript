import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {Artifact} from './artifact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoArtifact(artifact: Artifact | undefined = {} as Artifact) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(artifact),
    }
}
