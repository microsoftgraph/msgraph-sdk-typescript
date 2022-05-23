import {AgreementFile} from './agreementFile';
import {AgreementFileLocalization} from './agreementFileLocalization';
import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {AgreementFileLocalizationImpl, AgreementFilePropertiesImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AgreementFileImpl extends AgreementFilePropertiesImpl implements AgreementFile, Parsable {
    /** The localized version of the terms of use agreement files attached to the agreement. */
    public localizations?: AgreementFileLocalization[] | undefined;
    /**
     * Instantiates a new agreementFile and sets the default values.
     * @param agreementFileParameterValue 
     */
    public constructor(agreementFileParameterValue?: AgreementFile | undefined) {
        super();
        this.localizations = agreementFileParameterValue?.localizations ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "localizations": n => { this.localizations = n.getCollectionOfObjectValues<AgreementFileLocalizationImpl>(createAgreementFileLocalizationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.localizations && this.localizations.length != 0){        const localizationsArrValue: AgreementFileLocalizationImpl[] = []; this.localizations?.forEach(element => {localizationsArrValue.push(new AgreementFileLocalizationImpl(element));});
        writer.writeCollectionOfObjectValues<AgreementFileLocalizationImpl>("localizations", localizationsArrValue);
        }
    };
}
