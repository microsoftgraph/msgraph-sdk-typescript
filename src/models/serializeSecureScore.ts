import {AverageComparativeScore} from './averageComparativeScore';
import {ControlScore} from './controlScore';
import {SecureScore} from './secureScore';
import {SecurityVendorInformation} from './securityVendorInformation';
import {serializeAverageComparativeScore} from './serializeAverageComparativeScore';
import {serializeControlScore} from './serializeControlScore';
import {serializeEntity} from './serializeEntity';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScore(writer: SerializationWriter, secureScore: SecureScore | undefined = {} as SecureScore) : void {
        serializeEntity(writer, secureScore)
        writer.writeNumberValue("activeUserCount", secureScore.activeUserCount);
        writer.writeCollectionOfObjectValues<AverageComparativeScore>("averageComparativeScores", secureScore.averageComparativeScores, serializeAverageComparativeScore);
        writer.writeStringValue("azureTenantId", secureScore.azureTenantId);
        writer.writeCollectionOfObjectValues<ControlScore>("controlScores", secureScore.controlScores, serializeControlScore);
        writer.writeDateValue("createdDateTime", secureScore.createdDateTime);
        writer.writeNumberValue("currentScore", secureScore.currentScore);
        writer.writeCollectionOfPrimitiveValues<string>("enabledServices", secureScore.enabledServices);
        writer.writeNumberValue("licensedUserCount", secureScore.licensedUserCount);
        writer.writeNumberValue("maxScore", secureScore.maxScore);
        writer.writeObjectValue<SecurityVendorInformation>("vendorInformation", secureScore.vendorInformation, serializeSecurityVendorInformation);
}
