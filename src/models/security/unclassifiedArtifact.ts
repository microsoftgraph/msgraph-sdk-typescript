import {Artifact} from './artifact';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnclassifiedArtifact extends Artifact, Parsable {
    /**
     * The kind for this unclassifiedArtifact resource, describing what this value means.
     */
    kind?: string | undefined;
    /**
     * The value for this unclassifiedArtifact.
     */
    value?: string | undefined;
}
