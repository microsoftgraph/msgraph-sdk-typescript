import {Agreement} from './agreement';
import {AgreementAcceptance} from './agreementAcceptance';
import {AgreementFile} from './agreementFile';
import {AgreementFileLocalization} from './agreementFileLocalization';
import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {createAgreementFileFromDiscriminatorValue} from './createAgreementFileFromDiscriminatorValue';
import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {createTermsExpirationFromDiscriminatorValue} from './createTermsExpirationFromDiscriminatorValue';
import {AgreementAcceptanceImpl, AgreementFileImpl, AgreementFileLocalizationImpl, EntityImpl, TermsExpirationImpl} from './index';
import {TermsExpiration} from './termsExpiration';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AgreementImpl extends EntityImpl implements Agreement, Parsable {
    /** Read-only. Information about acceptances of this agreement. */
    public acceptances?: AgreementAcceptance[] | undefined;
    /** Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement. Supports $filter (eq). */
    public displayName?: string | undefined;
    /** Default PDF linked to this agreement. */
    public file?: AgreementFile | undefined;
    /** PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead. */
    public files?: AgreementFileLocalization[] | undefined;
    /** This setting enables you to require end users to accept this agreement on every device that they are accessing it from. The end user will be required to register their device in Azure AD, if they haven't already done so. Supports $filter (eq). */
    public isPerDeviceAcceptanceRequired?: boolean | undefined;
    /** Indicates whether the user has to expand the agreement before accepting. Supports $filter (eq). */
    public isViewingBeforeAcceptanceRequired?: boolean | undefined;
    /** Expiration schedule and frequency of agreement for all users.  Supports $filter (eq). */
    public termsExpiration?: TermsExpiration | undefined;
    /** The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations. */
    public userReacceptRequiredFrequency?: Duration | undefined;
    /**
     * Instantiates a new agreement and sets the default values.
     * @param agreementParameterValue 
     */
    public constructor(agreementParameterValue?: Agreement | undefined) {
        super();
        this.acceptances = agreementParameterValue?.acceptances ;
        this.displayName = agreementParameterValue?.displayName ;
        this.file = agreementParameterValue?.file ;
        this.files = agreementParameterValue?.files ;
        this.isPerDeviceAcceptanceRequired = agreementParameterValue?.isPerDeviceAcceptanceRequired ;
        this.isViewingBeforeAcceptanceRequired = agreementParameterValue?.isViewingBeforeAcceptanceRequired ;
        this.termsExpiration = agreementParameterValue?.termsExpiration ;
        this.userReacceptRequiredFrequency = agreementParameterValue?.userReacceptRequiredFrequency ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acceptances": n => { this.acceptances = n.getCollectionOfObjectValues<AgreementAcceptanceImpl>(createAgreementAcceptanceFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "file": n => { this.file = n.getObjectValue<AgreementFileImpl>(createAgreementFileFromDiscriminatorValue); },
            "files": n => { this.files = n.getCollectionOfObjectValues<AgreementFileLocalizationImpl>(createAgreementFileLocalizationFromDiscriminatorValue); },
            "isPerDeviceAcceptanceRequired": n => { this.isPerDeviceAcceptanceRequired = n.getBooleanValue(); },
            "isViewingBeforeAcceptanceRequired": n => { this.isViewingBeforeAcceptanceRequired = n.getBooleanValue(); },
            "termsExpiration": n => { this.termsExpiration = n.getObjectValue<TermsExpirationImpl>(createTermsExpirationFromDiscriminatorValue); },
            "userReacceptRequiredFrequency": n => { this.userReacceptRequiredFrequency = n.getDurationValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptances && this.acceptances.length != 0){        const acceptancesArrValue: AgreementAcceptanceImpl[] = []; this.acceptances?.forEach(element => {acceptancesArrValue.push(new AgreementAcceptanceImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementAcceptanceImpl>("acceptances", acceptancesArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.file){
        writer.writeObjectValue<AgreementFileImpl>("file", new AgreementFileImpl(this.file));
        }
        if(this.files && this.files.length != 0){        const filesArrValue: AgreementFileLocalizationImpl[] = []; this.files?.forEach(element => {filesArrValue.push(new AgreementFileLocalizationImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementFileLocalizationImpl>("files", filesArrValue);
        }
        if(this.isPerDeviceAcceptanceRequired){
        writer.writeBooleanValue("isPerDeviceAcceptanceRequired", this.isPerDeviceAcceptanceRequired);
        }
        if(this.isViewingBeforeAcceptanceRequired){
        writer.writeBooleanValue("isViewingBeforeAcceptanceRequired", this.isViewingBeforeAcceptanceRequired);
        }
        if(this.termsExpiration){
        writer.writeObjectValue<TermsExpirationImpl>("termsExpiration", new TermsExpirationImpl(this.termsExpiration));
        }
        if(this.userReacceptRequiredFrequency){
        writer.writeDurationValue("userReacceptRequiredFrequency", this.userReacceptRequiredFrequency);
        }
    };
}
