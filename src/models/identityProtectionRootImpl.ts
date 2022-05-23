import {createRiskDetectionFromDiscriminatorValue} from './createRiskDetectionFromDiscriminatorValue';
import {createRiskyUserFromDiscriminatorValue} from './createRiskyUserFromDiscriminatorValue';
import {IdentityProtectionRoot} from './identityProtectionRoot';
import {RiskDetectionImpl, RiskyUserImpl} from './index';
import {RiskDetection} from './riskDetection';
import {RiskyUser} from './riskyUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProtectionRootImpl implements AdditionalDataHolder, IdentityProtectionRoot, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Risk detection in Azure AD Identity Protection and the associated information about the detection. */
    public riskDetections?: RiskDetection[] | undefined;
    /** Users that are flagged as at-risk by Azure AD Identity Protection. */
    public riskyUsers?: RiskyUser[] | undefined;
    /**
     * Instantiates a new IdentityProtectionRoot and sets the default values.
     * @param identityProtectionRootParameterValue 
     */
    public constructor(identityProtectionRootParameterValue?: IdentityProtectionRoot | undefined) {
        this.additionalData = identityProtectionRootParameterValue?.additionalData ? identityProtectionRootParameterValue?.additionalData! : {}
        this.riskDetections = identityProtectionRootParameterValue?.riskDetections ;
        this.riskyUsers = identityProtectionRootParameterValue?.riskyUsers ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "riskDetections": n => { this.riskDetections = n.getCollectionOfObjectValues<RiskDetectionImpl>(createRiskDetectionFromDiscriminatorValue); },
            "riskyUsers": n => { this.riskyUsers = n.getCollectionOfObjectValues<RiskyUserImpl>(createRiskyUserFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.riskDetections && this.riskDetections.length != 0){        const riskDetectionsArrValue: RiskDetectionImpl[] = []; this.riskDetections?.forEach(element => {riskDetectionsArrValue.push(new RiskDetectionImpl(element));});
        writer.writeCollectionOfObjectValues<RiskDetectionImpl>("riskDetections", riskDetectionsArrValue);
        }
        if(this.riskyUsers && this.riskyUsers.length != 0){        const riskyUsersArrValue: RiskyUserImpl[] = []; this.riskyUsers?.forEach(element => {riskyUsersArrValue.push(new RiskyUserImpl(element));});
        writer.writeCollectionOfObjectValues<RiskyUserImpl>("riskyUsers", riskyUsersArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
