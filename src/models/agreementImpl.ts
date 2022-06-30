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
export class AgreementImpl extends EntityImpl implements Agreement {
    /** Read-only. Information about acceptances of this agreement. */
    private _acceptances?: AgreementAcceptance[] | undefined;
    /** Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement. Supports $filter (eq). */
    private _displayName?: string | undefined;
    /** Default PDF linked to this agreement. */
    private _file?: AgreementFile | undefined;
    /** PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead. */
    private _files?: AgreementFileLocalization[] | undefined;
    /** This setting enables you to require end users to accept this agreement on every device that they are accessing it from. The end user will be required to register their device in Azure AD, if they haven't already done so. Supports $filter (eq). */
    private _isPerDeviceAcceptanceRequired?: boolean | undefined;
    /** Indicates whether the user has to expand the agreement before accepting. Supports $filter (eq). */
    private _isViewingBeforeAcceptanceRequired?: boolean | undefined;
    /** Expiration schedule and frequency of agreement for all users.  Supports $filter (eq). */
    private _termsExpiration?: TermsExpiration | undefined;
    /** The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations. */
    private _userReacceptRequiredFrequency?: Duration | undefined;
    /**
     * Gets the acceptances property value. Read-only. Information about acceptances of this agreement.
     * @returns a AgreementAcceptanceInterface
     */
    public get acceptances() {
        return this._acceptances;
    };
    /**
     * Sets the acceptances property value. Read-only. Information about acceptances of this agreement.
     * @param value Value to set for the acceptances property.
     */
    public set acceptances(value: AgreementAcceptance[] | undefined) {
        if(value) {
            const acceptancesArrValue: AgreementAcceptanceImpl[] = [];
            this.acceptances?.forEach(element => {
                acceptancesArrValue.push((element instanceof AgreementAcceptanceImpl? element:new AgreementAcceptanceImpl(element)));
            });
            this._acceptances = acceptancesArrValue;
        }
    };
    /**
     * Instantiates a new agreement and sets the default values.
     * @param agreementParameterValue 
     */
    public constructor(agreementParameterValue?: Agreement | undefined) {
        super(agreementParameterValue);
        this._acceptances = agreementParameterValue?.acceptances;
        this._displayName = agreementParameterValue?.displayName;
        this._file = agreementParameterValue?.file;
        this._files = agreementParameterValue?.files;
        this._isPerDeviceAcceptanceRequired = agreementParameterValue?.isPerDeviceAcceptanceRequired;
        this._isViewingBeforeAcceptanceRequired = agreementParameterValue?.isViewingBeforeAcceptanceRequired;
        this._termsExpiration = agreementParameterValue?.termsExpiration;
        this._userReacceptRequiredFrequency = agreementParameterValue?.userReacceptRequiredFrequency;
    };
    /**
     * Gets the displayName property value. Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement. Supports $filter (eq).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the agreement. The display name is used for internal tracking of the agreement but is not shown to end users who view the agreement. Supports $filter (eq).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the file property value. Default PDF linked to this agreement.
     * @returns a AgreementFileInterface
     */
    public get file() {
        return this._file;
    };
    /**
     * Sets the file property value. Default PDF linked to this agreement.
     * @param value Value to set for the file property.
     */
    public set file(value: AgreementFile | undefined) {
        if(value) {
            this._file = value instanceof AgreementFileImpl? value : new AgreementFileImpl(value);
        }
    };
    /**
     * Gets the files property value. PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
     * @returns a AgreementFileLocalizationInterface
     */
    public get files() {
        return this._files;
    };
    /**
     * Sets the files property value. PDFs linked to this agreement. Note: This property is in the process of being deprecated. Use the  file property instead.
     * @param value Value to set for the files property.
     */
    public set files(value: AgreementFileLocalization[] | undefined) {
        if(value) {
            const filesArrValue: AgreementFileLocalizationImpl[] = [];
            this.files?.forEach(element => {
                filesArrValue.push((element instanceof AgreementFileLocalizationImpl? element:new AgreementFileLocalizationImpl(element)));
            });
            this._files = filesArrValue;
        }
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
     * Gets the isPerDeviceAcceptanceRequired property value. This setting enables you to require end users to accept this agreement on every device that they are accessing it from. The end user will be required to register their device in Azure AD, if they haven't already done so. Supports $filter (eq).
     * @returns a boolean
     */
    public get isPerDeviceAcceptanceRequired() {
        return this._isPerDeviceAcceptanceRequired;
    };
    /**
     * Sets the isPerDeviceAcceptanceRequired property value. This setting enables you to require end users to accept this agreement on every device that they are accessing it from. The end user will be required to register their device in Azure AD, if they haven't already done so. Supports $filter (eq).
     * @param value Value to set for the isPerDeviceAcceptanceRequired property.
     */
    public set isPerDeviceAcceptanceRequired(value: boolean | undefined) {
        if(value) {
            this._isPerDeviceAcceptanceRequired = value;
        }
    };
    /**
     * Gets the isViewingBeforeAcceptanceRequired property value. Indicates whether the user has to expand the agreement before accepting. Supports $filter (eq).
     * @returns a boolean
     */
    public get isViewingBeforeAcceptanceRequired() {
        return this._isViewingBeforeAcceptanceRequired;
    };
    /**
     * Sets the isViewingBeforeAcceptanceRequired property value. Indicates whether the user has to expand the agreement before accepting. Supports $filter (eq).
     * @param value Value to set for the isViewingBeforeAcceptanceRequired property.
     */
    public set isViewingBeforeAcceptanceRequired(value: boolean | undefined) {
        if(value) {
            this._isViewingBeforeAcceptanceRequired = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptances && this.acceptances.length != 0){        const acceptancesArrValue: AgreementAcceptanceImpl[] = [];
        this.acceptances?.forEach(element => {
            acceptancesArrValue.push((element instanceof AgreementAcceptanceImpl? element:new AgreementAcceptanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AgreementAcceptanceImpl>("acceptances", acceptancesArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.file){
            writer.writeObjectValue<AgreementFileImpl>("file", (!this.file || this.file instanceof AgreementFileImpl? this.file : new AgreementFileImpl(this.file)));
        }
        if(this.files && this.files.length != 0){        const filesArrValue: AgreementFileLocalizationImpl[] = [];
        this.files?.forEach(element => {
            filesArrValue.push((element instanceof AgreementFileLocalizationImpl? element:new AgreementFileLocalizationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AgreementFileLocalizationImpl>("files", filesArrValue);
        }
        if(this.isPerDeviceAcceptanceRequired){
            writer.writeBooleanValue("isPerDeviceAcceptanceRequired", this.isPerDeviceAcceptanceRequired);
        }
        if(this.isViewingBeforeAcceptanceRequired){
            writer.writeBooleanValue("isViewingBeforeAcceptanceRequired", this.isViewingBeforeAcceptanceRequired);
        }
        if(this.termsExpiration){
            writer.writeObjectValue<TermsExpirationImpl>("termsExpiration", (!this.termsExpiration || this.termsExpiration instanceof TermsExpirationImpl? this.termsExpiration : new TermsExpirationImpl(this.termsExpiration)));
        }
        if(this.userReacceptRequiredFrequency){
            writer.writeDurationValue("userReacceptRequiredFrequency", this.userReacceptRequiredFrequency);
        }
    };
    /**
     * Gets the termsExpiration property value. Expiration schedule and frequency of agreement for all users.  Supports $filter (eq).
     * @returns a TermsExpirationInterface
     */
    public get termsExpiration() {
        return this._termsExpiration;
    };
    /**
     * Sets the termsExpiration property value. Expiration schedule and frequency of agreement for all users.  Supports $filter (eq).
     * @param value Value to set for the termsExpiration property.
     */
    public set termsExpiration(value: TermsExpiration | undefined) {
        if(value) {
            this._termsExpiration = value instanceof TermsExpirationImpl? value : new TermsExpirationImpl(value);
        }
    };
    /**
     * Gets the userReacceptRequiredFrequency property value. The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.
     * @returns a Duration
     */
    public get userReacceptRequiredFrequency() {
        return this._userReacceptRequiredFrequency;
    };
    /**
     * Sets the userReacceptRequiredFrequency property value. The duration after which the user must re-accept the terms of use. The value is represented in ISO 8601 format for durations.
     * @param value Value to set for the userReacceptRequiredFrequency property.
     */
    public set userReacceptRequiredFrequency(value: Duration | undefined) {
        if(value) {
            this._userReacceptRequiredFrequency = value;
        }
    };
}
