import {deserializeIntoEntity} from './deserializeIntoEntity';
import {GovernanceInsight} from './governanceInsight';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGovernanceInsight(governanceInsight: GovernanceInsight | undefined = {} as GovernanceInsight) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(governanceInsight),
        "insightCreatedDateTime": n => { governanceInsight.insightCreatedDateTime = n.getDateValue(); },
    }
}
