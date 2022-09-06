import {createAgreementFileLocalizationFromDiscriminatorValue} from './createAgreementFileLocalizationFromDiscriminatorValue';
import {AgreementFileLocalization, AgreementFileProperties} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AgreementFile extends AgreementFileProperties implements Parsable {
    /** The localized version of the terms of use agreement files attached to the agreement. */
    private _localizations?: AgreementFileLocalization[] | undefined;
    /**
     * Instantiates a new AgreementFile and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.agreementFile";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "localizations": n => { this.localizations = n.getCollectionOfObjectValues<AgreementFileLocalization>(createAgreementFileLocalizationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the localizations property value. The localized version of the terms of use agreement files attached to the agreement.
     * @returns a agreementFileLocalization
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * Sets the localizations property value. The localized version of the terms of use agreement files attached to the agreement.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: AgreementFileLocalization[] | undefined) {
        this._localizations = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("localizations", this.localizations);
    };
}
