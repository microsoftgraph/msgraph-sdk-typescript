import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {GovernanceInsight} from './governanceInsight';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGovernanceInsight(governanceInsight: GovernanceInsight | undefined = {} as GovernanceInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(governanceInsight),
        "insightCreatedDateTime": n => { governanceInsight.insightCreatedDateTime = n.getDateValue(); },
    }
}
