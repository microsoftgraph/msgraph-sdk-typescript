import {serializeEntity} from '../serializeEntity';
import type {Artifact} from './artifact';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeArtifact(writer: SerializationWriter, artifact: Artifact | undefined = {} as Artifact) : void {
        serializeEntity(writer, artifact)
}
