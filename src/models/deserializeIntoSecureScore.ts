import {AverageComparativeScore} from './averageComparativeScore';
import {ControlScore} from './controlScore';
import {createAverageComparativeScoreFromDiscriminatorValue} from './createAverageComparativeScoreFromDiscriminatorValue';
import {createControlScoreFromDiscriminatorValue} from './createControlScoreFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SecureScore} from './secureScore';
import {SecurityVendorInformation} from './securityVendorInformation';
import {serializeAverageComparativeScore} from './serializeAverageComparativeScore';
import {serializeControlScore} from './serializeControlScore';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScore(secureScore: SecureScore | undefined = {} as SecureScore) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(secureScore),
        "activeUserCount": n => { secureScore.activeUserCount = n.getNumberValue(); },
        "averageComparativeScores": n => { secureScore.averageComparativeScores = n.getCollectionOfObjectValues<AverageComparativeScore>(createAverageComparativeScoreFromDiscriminatorValue); },
        "azureTenantId": n => { secureScore.azureTenantId = n.getStringValue(); },
        "controlScores": n => { secureScore.controlScores = n.getCollectionOfObjectValues<ControlScore>(createControlScoreFromDiscriminatorValue); },
        "createdDateTime": n => { secureScore.createdDateTime = n.getDateValue(); },
        "currentScore": n => { secureScore.currentScore = n.getNumberValue(); },
        "enabledServices": n => { secureScore.enabledServices = n.getCollectionOfPrimitiveValues<string>(); },
        "licensedUserCount": n => { secureScore.licensedUserCount = n.getNumberValue(); },
        "maxScore": n => { secureScore.maxScore = n.getNumberValue(); },
        "vendorInformation": n => { secureScore.vendorInformation = n.getObjectValue<SecurityVendorInformation>(createSecurityVendorInformationFromDiscriminatorValue); },
    }
}
