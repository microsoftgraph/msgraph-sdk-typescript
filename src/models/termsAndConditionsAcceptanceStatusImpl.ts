import {createTermsAndConditionsFromDiscriminatorValue} from './createTermsAndConditionsFromDiscriminatorValue';
import {EntityImpl, TermsAndConditionsImpl} from './index';
import {TermsAndConditions} from './termsAndConditions';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A termsAndConditionsAcceptanceStatus entity represents the acceptance status of a given Terms and Conditions (T&C) policy by a given user. Users must accept the most up-to-date version of the terms in order to retain access to the Company Portal. */
export class TermsAndConditionsAcceptanceStatusImpl extends EntityImpl implements Parsable, TermsAndConditionsAcceptanceStatus {
    /** DateTime when the terms were last accepted by the user. */
    public acceptedDateTime?: Date | undefined;
    /** Most recent version number of the T&C accepted by the user. */
    public acceptedVersion?: number | undefined;
    /** Navigation link to the terms and conditions that are assigned. */
    public termsAndConditions?: TermsAndConditions | undefined;
    /** Display name of the user whose acceptance the entity represents. */
    public userDisplayName?: string | undefined;
    /** The userPrincipalName of the User that accepted the term. */
    public userPrincipalName?: string | undefined;
    /**
     * Instantiates a new termsAndConditionsAcceptanceStatus and sets the default values.
     * @param termsAndConditionsAcceptanceStatusParameterValue 
     */
    public constructor(termsAndConditionsAcceptanceStatusParameterValue?: TermsAndConditionsAcceptanceStatus | undefined) {
        super();
        this.acceptedDateTime = termsAndConditionsAcceptanceStatusParameterValue?.acceptedDateTime ;
        this.acceptedVersion = termsAndConditionsAcceptanceStatusParameterValue?.acceptedVersion ;
        this.termsAndConditions = termsAndConditionsAcceptanceStatusParameterValue?.termsAndConditions ;
        this.userDisplayName = termsAndConditionsAcceptanceStatusParameterValue?.userDisplayName ;
        this.userPrincipalName = termsAndConditionsAcceptanceStatusParameterValue?.userPrincipalName ;
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
        writer.writeObjectValue<TermsAndConditionsImpl>("termsAndConditions", new TermsAndConditionsImpl(this.termsAndConditions));
        }
        if(this.userDisplayName){
        writer.writeStringValue("userDisplayName", this.userDisplayName);
        }
        if(this.userPrincipalName){
        writer.writeStringValue("userPrincipalName", this.userPrincipalName);
        }
    };
}
