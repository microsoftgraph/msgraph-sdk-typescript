import {AgreementFileLocalization} from './agreementFileLocalization';
import {AgreementFileVersion} from './agreementFileVersion';
import {createAgreementFileVersionFromDiscriminatorValue} from './createAgreementFileVersionFromDiscriminatorValue';
import {AgreementFilePropertiesImpl, AgreementFileVersionImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AgreementFileLocalizationImpl extends AgreementFilePropertiesImpl implements AgreementFileLocalization, Parsable {
    /** Read-only. Customized versions of the terms of use agreement in the Azure AD tenant. */
    public versions?: AgreementFileVersion[] | undefined;
    /**
     * Instantiates a new agreementFileLocalization and sets the default values.
     * @param agreementFileLocalizationParameterValue 
     */
    public constructor(agreementFileLocalizationParameterValue?: AgreementFileLocalization | undefined) {
        super();
        this.versions = agreementFileLocalizationParameterValue?.versions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "versions": n => { this.versions = n.getCollectionOfObjectValues<AgreementFileVersionImpl>(createAgreementFileVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.versions && this.versions.length != 0){        const versionsArrValue: AgreementFileVersionImpl[] = []; this.versions?.forEach(element => {versionsArrValue.push(new AgreementFileVersionImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementFileVersionImpl>("versions", versionsArrValue);
        }
    };
}
