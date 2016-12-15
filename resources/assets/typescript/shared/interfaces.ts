export interface ICourse {
    id: number;
    status: string;
    name: string;
    abbreviation: string;
    number: string;
    topics: ITopic[];
}

export interface ITopic
{
    id: number,
    title: string;
    name: string;
    status: string;
    learnItems: ILearnItem[];
    testItems: ITestItem[];
    reviewItems: IReviewItem[];
    exampleReview: IReviewItem[];
}

export interface ILearnItem
{
    title: string;
    name: string;
}

export interface ITestItem
{
    title: string;
}

export interface IReviewItem
{
    title: string;
    sections: ISection[];
}

export interface ISection
{
    title: string;
    content: string;
    imagePath: string;
}

export class PracticeProblem implements ILearnItem, IMultipleChoice
{
    title: string;
    name: string;
    imagePath: string;
    question: string;
    options : string[];
    answer: string;
    explanation: string;
}

export class TestProblem implements ITestItem, IMultipleChoice
{
    title: string;
    question: string;
    options : string[];
    answer: string;
}

export class InteractiveMolecule implements ILearnItem 
{
    title: string;
    name: string;
    imagePath: string;
    colorLocationAssociations: IColorLocationAssociation[];
    compoundHotspots: IHotspot[];
}

export interface IMultipleChoice extends IQuestion {
    question: string;
    options : string[];
    answer: string;
}

export interface IFillInTheBlank extends IQuestion {
    question: string;
    answer: string;
}

export interface ILongAnswer extends IQuestion {
    question: string;
    answer: string;
}

export interface IQuestion {
    question: string;
    answer: string;
}


export interface IHotspot 
{
    name: string;
    y: number;
    x: number;
    size: number;
    color: string;
    text: string;
}

export class IColorLocationAssociation
{
    color: string;
    location: string;
    description: string;

}