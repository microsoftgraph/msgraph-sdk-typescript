import {createOutlookCategoryFromDiscriminatorValue} from './createOutlookCategoryFromDiscriminatorValue';
import {EntityImpl, OutlookCategoryImpl} from './index';
import {OutlookCategory} from './outlookCategory';
import {OutlookUser} from './outlookUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OutlookUserImpl extends EntityImpl implements OutlookUser {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A list of categories defined for the user. */
    public masterCategories?: OutlookCategory[] | undefined;
    /**
     * Instantiates a new OutlookUser and sets the default values.
     * @param outlookUserParameterValue 
     */
    public constructor(outlookUserParameterValue?: OutlookUser | undefined) {
        super(outlookUserParameterValue);
        this.additionalData = outlookUserParameterValue?.additionalData ? outlookUserParameterValue?.additionalData! : {};
        const masterCategoriesArrValue: OutlookCategoryImpl[] = []; outlookUserParameterValue.masterCategories?.forEach(element => {masterCategoriesArrValue.push(element instanceof OutlookCategoryImpl? element : new OutlookCategoryImpl(element));});
        this.masterCategories = masterCategoriesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "masterCategories": n => { this.masterCategories = n.getCollectionOfObjectValues<OutlookCategoryImpl>(createOutlookCategoryFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.masterCategories && this.masterCategories.length != 0){        const masterCategoriesArrValue: OutlookCategoryImpl[] = []; this.masterCategories?.forEach(element => {masterCategoriesArrValue.push(element instanceof OutlookCategoryImpl? element : new OutlookCategoryImpl(element));});
            writer.writeCollectionOfObjectValues<OutlookCategoryImpl>("masterCategories", masterCategoriesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
