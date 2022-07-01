import {AgreementFile} from './agreementFile';
import {AgreementFileLocalization} from './agreementFileLocalization';
import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {AgreementFileLocalizationImpl, AgreementFilePropertiesImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFileImpl extends AgreementFilePropertiesImpl implements AgreementFile {
    /** The localized version of the terms of use agreement files attached to the agreement. */
    private _localizations?: AgreementFileLocalization[] | undefined;
    /**
     * Instantiates a new AgreementFile and sets the default values.
     * @param agreementFileParameterValue 
     */
    public constructor(agreementFileParameterValue?: AgreementFile | undefined) {
        super(agreementFileParameterValue);
        this._localizations = agreementFileParameterValue?.localizations;
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
     * Gets the localizations property value. The localized version of the terms of use agreement files attached to the agreement.
     * @returns a AgreementFileLocalizationInterface
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * Sets the localizations property value. The localized version of the terms of use agreement files attached to the agreement.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: AgreementFileLocalization[] | undefined) {
        if(value) {
            const localizationsArrValue: AgreementFileLocalizationImpl[] = [];
            this.localizations?.forEach(element => {
                localizationsArrValue.push((element instanceof AgreementFileLocalizationImpl? element as AgreementFileLocalizationImpl:new AgreementFileLocalizationImpl(element)));
            });
            this._localizations = localizationsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.localizations && this.localizations.length != 0){        const localizationsArrValue: AgreementFileLocalizationImpl[] = [];
        this.localizations?.forEach(element => {
            localizationsArrValue.push((element instanceof AgreementFileLocalizationImpl? element as AgreementFileLocalizationImpl:new AgreementFileLocalizationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AgreementFileLocalizationImpl>("localizations", localizationsArrValue);
        }
    };
}
