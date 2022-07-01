import {Agreement} from './agreement';
import {AgreementAcceptance} from './agreementAcceptance';
import {createAgreementAcceptanceFromDiscriminatorValue} from './createAgreementAcceptanceFromDiscriminatorValue';
import {createAgreementFromDiscriminatorValue} from './createAgreementFromDiscriminatorValue';
import {AgreementAcceptanceImpl, AgreementImpl, EntityImpl} from './index';
import {TermsOfUseContainer} from './termsOfUseContainer';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class TermsOfUseContainerImpl extends EntityImpl implements TermsOfUseContainer {
    /** Represents the current status of a user's response to a company's customizable terms of use agreement. */
    private _agreementAcceptances?: AgreementAcceptance[] | undefined;
    /** Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD). */
    private _agreements?: Agreement[] | undefined;
    /**
     * Gets the agreementAcceptances property value. Represents the current status of a user's response to a company's customizable terms of use agreement.
     * @returns a AgreementAcceptanceInterface
     */
    public get agreementAcceptances() {
        return this._agreementAcceptances;
    };
    /**
     * Sets the agreementAcceptances property value. Represents the current status of a user's response to a company's customizable terms of use agreement.
     * @param value Value to set for the agreementAcceptances property.
     */
    public set agreementAcceptances(value: AgreementAcceptance[] | undefined) {
        if(value) {
            const agreementAcceptancesArrValue: AgreementAcceptanceImpl[] = [];
            this.agreementAcceptances?.forEach(element => {
                agreementAcceptancesArrValue.push((element instanceof AgreementAcceptanceImpl? element as AgreementAcceptanceImpl:new AgreementAcceptanceImpl(element)));
            });
            this._agreementAcceptances = agreementAcceptancesArrValue;
        }
    };
    /**
     * Gets the agreements property value. Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD).
     * @returns a AgreementInterface
     */
    public get agreements() {
        return this._agreements;
    };
    /**
     * Sets the agreements property value. Represents a tenant's customizable terms of use agreement that's created and managed with Azure Active Directory (Azure AD).
     * @param value Value to set for the agreements property.
     */
    public set agreements(value: Agreement[] | undefined) {
        if(value) {
            const agreementsArrValue: AgreementImpl[] = [];
            this.agreements?.forEach(element => {
                agreementsArrValue.push((element instanceof AgreementImpl? element as AgreementImpl:new AgreementImpl(element)));
            });
            this._agreements = agreementsArrValue;
        }
    };
    /**
     * Instantiates a new termsOfUseContainer and sets the default values.
     * @param termsOfUseContainerParameterValue 
     */
    public constructor(termsOfUseContainerParameterValue?: TermsOfUseContainer | undefined) {
        super(termsOfUseContainerParameterValue);
        this._agreementAcceptances = termsOfUseContainerParameterValue?.agreementAcceptances;
        this._agreements = termsOfUseContainerParameterValue?.agreements;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "agreementAcceptances": n => { this.agreementAcceptances = n.getCollectionOfObjectValues<AgreementAcceptanceImpl>(createAgreementAcceptanceFromDiscriminatorValue); },
            "agreements": n => { this.agreements = n.getCollectionOfObjectValues<AgreementImpl>(createAgreementFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.agreementAcceptances && this.agreementAcceptances.length != 0){        const agreementAcceptancesArrValue: AgreementAcceptanceImpl[] = [];
        this.agreementAcceptances?.forEach(element => {
            agreementAcceptancesArrValue.push((element instanceof AgreementAcceptanceImpl? element as AgreementAcceptanceImpl:new AgreementAcceptanceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AgreementAcceptanceImpl>("agreementAcceptances", agreementAcceptancesArrValue);
        }
        if(this.agreements && this.agreements.length != 0){        const agreementsArrValue: AgreementImpl[] = [];
        this.agreements?.forEach(element => {
            agreementsArrValue.push((element instanceof AgreementImpl? element as AgreementImpl:new AgreementImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AgreementImpl>("agreements", agreementsArrValue);
        }
    };
}
