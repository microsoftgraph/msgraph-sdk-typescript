import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {EntityImpl, TermsAndConditionsImpl} from './index';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A termsAndConditionsAcceptanceStatus entity represents the acceptance status of a given Terms and Conditions (T&C) policy by a given user. Users must accept the most up-to-date version of the terms in order to retain access to the Company Portal. */
export class TermsAndConditionsAcceptanceStatusImpl extends EntityImpl implements TermsAndConditionsAcceptanceStatus {
    /** DateTime when the terms were last accepted by the user. */
    private _acceptedDateTime?: Date | undefined;
    /** Most recent version number of the T&C accepted by the user. */
    private _acceptedVersion?: number | undefined;
    /** Navigation link to the terms and conditions that are assigned. */
    private _termsAndConditions?: TermsAndConditions | undefined;
    /** Display name of the user whose acceptance the entity represents. */
    private _userDisplayName?: string | undefined;
    /** The userPrincipalName of the User that accepted the term. */
    private _userPrincipalName?: string | undefined;
    /**
     * Gets the acceptedDateTime property value. DateTime when the terms were last accepted by the user.
     * @returns a Date
     */
    public get acceptedDateTime() {
        return this._acceptedDateTime;
    };
    /**
     * Sets the acceptedDateTime property value. DateTime when the terms were last accepted by the user.
     * @param value Value to set for the acceptedDateTime property.
     */
    public set acceptedDateTime(value: Date | undefined) {
        if(value) {
            this._acceptedDateTime = value;
        }
    };
    /**
     * Gets the acceptedVersion property value. Most recent version number of the T&C accepted by the user.
     * @returns a integer
     */
    public get acceptedVersion() {
        return this._acceptedVersion;
    };
    /**
     * Sets the acceptedVersion property value. Most recent version number of the T&C accepted by the user.
     * @param value Value to set for the acceptedVersion property.
     */
    public set acceptedVersion(value: number | undefined) {
        if(value) {
            this._acceptedVersion = value;
        }
    };
    /**
     * Instantiates a new termsAndConditionsAcceptanceStatus and sets the default values.
     * @param termsAndConditionsAcceptanceStatusParameterValue 
     */
    public constructor(termsAndConditionsAcceptanceStatusParameterValue?: TermsAndConditionsAcceptanceStatus | undefined) {
        super(termsAndConditionsAcceptanceStatusParameterValue);
        this._acceptedDateTime = termsAndConditionsAcceptanceStatusParameterValue?.acceptedDateTime;
        this._acceptedVersion = termsAndConditionsAcceptanceStatusParameterValue?.acceptedVersion;
        this._termsAndConditions = termsAndConditionsAcceptanceStatusParameterValue?.termsAndConditions;
        this._userDisplayName = termsAndConditionsAcceptanceStatusParameterValue?.userDisplayName;
        this._userPrincipalName = termsAndConditionsAcceptanceStatusParameterValue?.userPrincipalName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acceptedDateTime": n => { this.acceptedDateTime = n.getDateValue(); },
            "acceptedVersion": n => { this.acceptedVersion = n.getNumberValue(); },
            "termsAndConditions": n => { this.termsAndConditions = n.getObjectValue<TermsAndConditionsImpl>(createTermsAndConditionsFromDiscriminatorValue); },
            "userDisplayName": n => { this.userDisplayName = n.getStringValue(); },
            "userPrincipalName": n => { this.userPrincipalName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.acceptedDateTime){
            writer.writeDateValue("acceptedDateTime", this.acceptedDateTime);
        }
        if(this.acceptedVersion){
            writer.writeNumberValue("acceptedVersion", this.acceptedVersion);
        }
        if(this.termsAndConditions){
            writer.writeObjectValue<TermsAndConditionsImpl>("termsAndConditions", (!this.termsAndConditions || this.termsAndConditions instanceof TermsAndConditionsImpl? this.termsAndConditions : new TermsAndConditionsImpl(this.termsAndConditions)));
        }
        if(this.userDisplayName){
            writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userPrincipalName){
            writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
    /**
     * Gets the termsAndConditions property value. Navigation link to the terms and conditions that are assigned.
     * @returns a TermsAndConditionsInterface
     */
    public get termsAndConditions() {
        return this._termsAndConditions;
    };
    /**
     * Sets the termsAndConditions property value. Navigation link to the terms and conditions that are assigned.
     * @param value Value to set for the termsAndConditions property.
     */
    public set termsAndConditions(value: TermsAndConditions | undefined) {
        if(value) {
            this._termsAndConditions = value instanceof TermsAndConditionsImpl? value : new TermsAndConditionsImpl(value);
        }
    };
    /**
     * Gets the userDisplayName property value. Display name of the user whose acceptance the entity represents.
     * @returns a string
     */
    public get userDisplayName() {
        return this._userDisplayName;
    };
    /**
     * Sets the userDisplayName property value. Display name of the user whose acceptance the entity represents.
     * @param value Value to set for the userDisplayName property.
     */
    public set userDisplayName(value: string | undefined) {
        if(value) {
            this._userDisplayName = value;
        }
    };
    /**
     * Gets the userPrincipalName property value. The userPrincipalName of the User that accepted the term.
     * @returns a string
     */
    public get userPrincipalName() {
        return this._userPrincipalName;
    };
    /**
     * Sets the userPrincipalName property value. The userPrincipalName of the User that accepted the term.
     * @param value Value to set for the userPrincipalName property.
     */
    public set userPrincipalName(value: string | undefined) {
        if(value) {
            this._userPrincipalName = value;
        }
    };
}
